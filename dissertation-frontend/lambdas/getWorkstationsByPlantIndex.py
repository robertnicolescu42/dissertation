import json
from decimal import Decimal
import boto3

dynamodb = boto3.resource('dynamodb')
table_name = 'workstations'
table = dynamodb.Table(table_name)


def handler(event, context):
    try:
        plant_index = event['plantIndex']
    except:
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Missing plantIndex parameter'})
        }

    try:
        response = table.scan(FilterExpression=boto3.dynamodb.conditions.Attr(
            'plantIndex').eq(plant_index))
        items = response['Items']

        # Convert Decimal objects to float or int
        for item in items:
            for key, value in item.items():
                if isinstance(value, Decimal):
                    item[key] = float(value)

    except:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Failed to query DynamoDB'})
        }

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,GET'
        },
        'body': items
    }

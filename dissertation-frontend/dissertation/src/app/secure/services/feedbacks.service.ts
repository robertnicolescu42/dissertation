import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedbacksService {
  constructor() {}

  getFeedbacks(plantIndex: string, stationId: string): Promise<any> {
    const s3 = new S3({
      accessKeyId: environment.awsmobile.access_key_id,
      secretAccessKey: environment.awsmobile.secret_access_key_id,
      region: environment.awsmobile.aws_project_region,
    });

    const key = `${plantIndex}/${stationId}/feedbacks.json`;

    const params = {
      Bucket: 'feedbacks-data',
      Key: key,
    };

    return s3
      .getObject(params)
      .promise()
      .then((data: any) => {
        return JSON.parse(data.Body.toString());
      })
      .catch((err: any) => {
        console.log(err);
        return null;
      });
  }
}

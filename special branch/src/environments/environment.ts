export const environment = {
  production: false,
  getWorkstationsUrl:
    'https://pcxm2807wj.execute-api.us-east-1.amazonaws.com/default/get-workstations',
  cognito: {
    userPoolId: 'us-east-1_4565JxUiw',
    userPoolWebClientId: '28fq9c0vvhe45fogd6vshof4ur',
  },
  awsmobile: {
    aws_project_region: 'us-east-1',
    aws_cognito_identity_pool_id:
      'us-east-1:8e19b3e5-9d24-4cc3-8494-4832f69306e4',
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: 'us-east-1_pk9rdtTBV',
    aws_user_pools_web_client_id: '3ufg9ndpvorf20a1t98ees44b',
    oauth: {},
    aws_cognito_username_attributes: ['EMAIL'],
    aws_cognito_social_providers: [],
    aws_cognito_signup_attributes: ['EMAIL'],
    aws_cognito_mfa_configuration: 'OFF',
    aws_cognito_mfa_types: ['SMS'],
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      passwordPolicyCharacters: [],
    },
    aws_cognito_verification_mechanisms: ['EMAIL'],
    aws_appsync_graphqlEndpoint:
      'https://lolndpmbyjdgnfo7ic74h2xdby.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  },
};

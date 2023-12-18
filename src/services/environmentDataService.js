export const getEnvironmentData = (environment = "Staging") => {
    let data = {};
    
    switch (environment) {
        case "Staging":
          data.public_key = import.meta.env.VITE_STAGING_PUBLIC_KEY
          data.secret_key = import.meta.env.VITE_STAGING_SECRET_KEY
          data.hosted_url = import.meta.env.VITE_STAGING_CHEKOUT_HOSTED_PAY_URL
          data.api_base_url = import.meta.env.VITE_STAGING_API_BASE_URL
          break;

        case "Pilot":
            data.public_key = import.meta.env.VITE_PILOT_PUBLIC_KEY
            data.secret_key = import.meta.env.VITE_PILOT_SECRET_KEY
            data.hosted_url = import.meta.env.VITE_PILOT_CHEKOUT_HOSTED_PAY_URL
            data.api_base_url = import.meta.env.VITE_PILOT_API_BASE_URL
            break;

        case "Production":
            data.public_key = import.meta.env.VITE_PRODUCTION_PUBLIC_KEY
            data.secret_key = import.meta.env.VITE_PRODUCTION_SECRET_KEY
            data.hosted_url = import.meta.env.VITE_PRODUCTION_CHEKOUT_HOSTED_PAY_URL
            data.api_base_url = import.meta.env.VITE_PRODUCTION_API_BASE_URL
            break;
            
        default:
            data.public_key = import.meta.env.VITE_STAGING_PUBLIC_KEY
            data.secret_key = import.meta.env.VITE_STAGING_SECRET_KEY
            data.hosted_url = import.meta.env.VITE_STAGING_CHEKOUT_HOSTED_PAY_URL
            data.api_base_url = import.meta.env.VITE_STAGING_API_BASE_URL
            break;
      }
      
      return data;
}
const authConfig = {
    secret: "Bow-ties-are-cool",
    // jwtExpiration: 3600,           // 1 hour
    // jwtRefreshExpiration: 86400,   // 24 hours
  
    /* for test */
    jwtExpiration: 300,          // 5 minute
    jwtRefreshExpiration: 300,  // 5 minutes
  };

  module.exports = authConfig;
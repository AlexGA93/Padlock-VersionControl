// Script to authenticate signup and signin proccess by jwt

// refresh token
 const authConfig = {
    secret: "Bow-ties-are-cool",
    // jwtExpiration: 3600,           // 1 hour
    // jwtRefreshExpiration: 86400,   // 24 hours
  
    /* for test */
    jwtExpiration: 60,          // 1 minute
    jwtRefreshExpiration: 120,  // 2 minutes
  };

  module.exports = authConfig;
// import users from "./users";
// import services from "./services";
// import { builtinModules } from "node:module";

function nodes(method,identify){
    // if identify is user or not
    if(identify === 'user'){
        console.log('is a user');
    }else if(identify === 'service'){
        console.log('is a service');
    }else{ 
        console.log('is none of them');
    }
    
};

module.export = nodes;
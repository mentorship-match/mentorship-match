// This file is a custom types set for our images to be rendered as modules. This is necessary for Typescript. 
declare module "*.jpg"{
    // the value represents a file path
    const value:string;
    export default value;
}
declare module "*.png"{
    const value:string;
    export default value;
}
declare module "*.svg"{
    const value:string;
    export default value;
}
declare module "*.jpeg"{
    const value:string;
    export default value;
}
declare module "*.gif"{
    const value:string;
    export default value;
}


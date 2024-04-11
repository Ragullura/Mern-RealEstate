//This errorhandler is for us manually  to handle errors.
export const errorHandler =(statusCode,message) =>{
    const error =new Error();
    error.statusCode= statusCode;
    error.message= message;
    return error;
}



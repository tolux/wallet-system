import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Get,
  Res,
  Req,
  Patch,
  HttpStatus,
} from '@nestjs/common';
export class ErrLog {
  messageConfig = {
    errorMessage: '',
    errorStatus: 400,
  };

  getErrorType(errorCode: string) {
    switch (errorCode) {
      case 'ER_DUP_ENTRY':
        this.messageConfig.errorMessage = 'Email is Already taken';
        this.messageConfig.errorStatus = HttpStatus.NOT_FOUND;
        break;

      default:
        this.messageConfig.errorMessage = 'Something went wrong';
        this.messageConfig.errorStatus = HttpStatus.BAD_REQUEST;
        break;
    }

    return this.messageConfig;
  }
}

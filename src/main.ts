// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import cookieParser from 'cookie-parser';

// async function bootstrap() {
//   // const app = await NestFactory.create(AppModule);
//   // await app.listen(process.env.PORT ?? 3000);


//   const app = await NestFactory.create(AppModule, {
//     cors: {
//       origin: true,
//       methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//       credentials: true,
//     },
//   });
//   app.use(cookieParser());
//   await app.listen(process.env.PORT ?? 8000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 
  app.enableCors({
    origin: 'http://localhost:3000', // frontend port
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  
  app.use(cookieParser());

  
  await app.listen(process.env.PORT || 5000); //backend port
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	// swagger config 
	const config = new DocumentBuilder()
		.setTitle('Weight Hub')
		.build()
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('swagger', app, document);
	await app.listen(3000);
}
bootstrap();

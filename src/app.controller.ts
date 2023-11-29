import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db/db.service';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly prisma: DbService
	) { }

	@Get()
	async getHello(): Promise<string> {
		const users = await this.prisma.user.findMany({});
		console.log(users);
		return this.appService.getHello();
	}
}

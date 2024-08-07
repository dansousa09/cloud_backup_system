import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	getHello(): string {
		return `
			<div style="text-align: center; padding: 1rem;">
				<h1>Cloud System Backup API is running...</h1>
			</div>
		`;
	}
}

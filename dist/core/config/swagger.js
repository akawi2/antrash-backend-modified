"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfiguration = void 0;
const swagger_1 = require("@nestjs/swagger");
class SwaggerConfiguration {
    static setup(app) {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('AnTrash')
            .setDescription('AnTrash swagger documentation')
            .setVersion('1.0')
            .build();
        const options = {
            operationIdFactory: (controllerKey, methodKey) => methodKey,
        };
        const document = swagger_1.SwaggerModule.createDocument(app, config, options);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
}
exports.SwaggerConfiguration = SwaggerConfiguration;
//# sourceMappingURL=swagger.js.map
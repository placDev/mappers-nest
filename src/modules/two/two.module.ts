import {Module} from "@nestjs/common";
import {TwoController} from "./controllers/two.controller";
import {TwoService} from "./services/two.service";
import {MapperModule} from "../mapper/mapper.module";

@Module({
    imports: [MapperModule.forFeature([])],
    controllers: [TwoController],
    providers: [TwoService],
})
export class TwoModule {}
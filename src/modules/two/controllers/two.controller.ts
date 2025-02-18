import {Controller, Get} from "@nestjs/common";
import {TwoService} from "../services/two.service";

@Controller("two")
export class TwoController {
    constructor(private twoService: TwoService) {}

    @Get()
    test() {
        return this.twoService.test();
    }
}
import {Injectable} from "@nestjs/common";

@Injectable()
export class TwoService {
    test() {
        return "two";
    }
}
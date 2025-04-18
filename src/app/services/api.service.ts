import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
class ApiService {

    http = inject(HttpClient);

    getWeather(): void {}
}
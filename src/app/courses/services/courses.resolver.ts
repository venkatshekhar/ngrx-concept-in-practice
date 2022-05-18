import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";


@Injectable()
export class CoursesResolver implements Resolve<boolean>{

    constructor(private courseService: CourseEntityService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.courseService.getAll().pipe(
            map(courses => !!courses)
        );
    }

}

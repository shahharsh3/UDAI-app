import { routes } from '../app/app-routing.module';

describe("AppRoutingModule", ()=>
{
    it("TRM - Testing whether the Routing is proper", () =>
    {
        let flag;

        for (let index in routes)
        {
            let componentGiven;

            let pathGiven = routes[index].path;
            
            if (routes[index].component != undefined)
            {
                componentGiven = routes[index].component.name;
            }
            
            flag = /^[\/]?update$/.test(pathGiven) && componentGiven == "AadharCardComponent";

            if (flag == true)
            {
                break;
            }
        }

        expect(flag).toBeTruthy();
    });
})


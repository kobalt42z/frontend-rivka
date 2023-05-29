import { RegisterInpute } from "../../interfaces";
import { MainAPI } from "./Main.Api";

export const UserApi = MainAPI.injectEndpoints({
    endpoints: (builder) => ({

        // endpoint for complete registeration 
        registerUser: builder.mutation({
            query: (_body: RegisterInpute) => ({
                url: "/auth/register",
                method: "POST",
                body: _body,
            })
        })
    })
});
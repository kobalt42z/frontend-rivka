import { RegisterInpute } from "../../interfaces";
import { MainAPI } from "./Main.Api";

export const UserApi = MainAPI.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (_body: RegisterInpute) => ({
                url: "/auth/register",
                method: "POST",
                body: _body,
            })
        })
    })
});
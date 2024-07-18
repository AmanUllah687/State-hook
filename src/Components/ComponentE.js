import React, {useContext} from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
    const user = useContext(UserContext)
    const chanel = useContext(ChannelContext)
    return (
        <div>
            {user} - {chanel}
        </div>
    )
}
export default ComponentE
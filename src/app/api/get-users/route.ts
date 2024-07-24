import { NextRequest, NextResponse } from "next/server";
import axios from "@/utils/axios";


// HTTPS request to get all users
export async function GET(request: NextRequest) {
    try {
        const response = await axios.get("/users");

        if (response.status === 200) {
            return NextResponse.json(response.data, { status: 200 });
        } else {
            console.error(response);
            return NextResponse.json(response.data, { status: response.status });
        }
    } catch (error: any) {
        console.error('Server Error (Get Users):', error.response?.data?.msg);
        return NextResponse.error();
    }
}
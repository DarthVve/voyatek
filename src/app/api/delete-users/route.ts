import { NextRequest, NextResponse } from "next/server";
import axios from "@/utils/axios";

// HTTPS request to delete a user
export async function DELETE(request: NextRequest) {
    try {
        const response = await axios.delete("/users");
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
import { NextResponse } from "next/server";

// http:localhost:3000/api/posts/1

// 實作 dynamic route

const url = "https://jsonplaceholder.typicode.com/posts";

export const GET = async (_, { params }) => {
  const id = params.id;
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
};

// PUT:全部更新
export const PUT = async (_, { params }) => {
  const id = params.id;
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: 1,
        title: "hello",
        body: "world",
        userId: 1,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
};

//PATCH:部分更新
export const PATCH = async (_, { params }) => {
  const id = params.id;
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "hello",
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
};

//DELETE
export const DELETE = async (_, { params }) => {
    const id = params.id;
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE"
      });
  
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({
        message: error.message,
      });
    }
  };
  
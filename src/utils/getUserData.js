import jwt from "jsonwebtoken";
export function getUserData(request) {
  try {
    console.log("Enter in getUserdata");
    const data = request.cookies.get("token");
    const { value } = data;
    if (!value)
      return NextResponse.json({ msg: "Invalid auth", success: false });

    const user = jwt.verify(value, process.env.secret);

    return user;
  } catch (error) {
    return NextResponse.json({ err: error, success: false });
  }
}

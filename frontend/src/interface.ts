export type Nullable<T> = null | T;

export interface member{
    id : string,
    pw : string,
    confirmPw : string,
    email : string,
}

export interface SignUp {
    name?: string,
    pw: string,
    email: string,
}

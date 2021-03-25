import { HtmlHTMLAttributes } from "react"
import { JsxAttribute } from "typescript"

export type FormInputType = {

    handleChange: any;
    label: string;
    name: string;
    type: string;
    value: any;
    required?: boolean;
}

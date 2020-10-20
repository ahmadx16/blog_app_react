import axios from '../axios';
import {
    handleErrors
} from "../utils"

export const getAllBlogsData = async () => {

    try {
        const allBlogsData = await axios.get("/");
        return allBlogsData.data

    } catch (err) {
        return handleErrors(err)
    }
}

export const addNewBlog = async (title:string, blog_markdown:string ) => {

    try {
        const blogData ={title, blog_markdown}
        const allBlogsData = await axios.post("/", blogData);
        return allBlogsData.data

    } catch (err) {
        return handleErrors(err)
    }
}

export const getBlogDetail = async (blogId:string) => {

    try {
        const allBlogsData = await axios.get("/"+blogId);
        return allBlogsData.data

    } catch (err) {
        return handleErrors(err)
    }
}

import Api from "./api";

const wordApi = () => Api().get<string[]>("/word");
export default wordApi;
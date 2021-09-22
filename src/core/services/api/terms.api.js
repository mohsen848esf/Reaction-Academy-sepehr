import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const Terms = async () => {
  try {
    const result = await Http.get(`${MainUrl}term/getall`);
    // console.log(result);
    return result.data;
  } catch (error) {
    return error;
  }
};


const TermById = async (TermsId) => {
  try {
    const result = await Http.get(`${MainUrl}term/${TermsId}`);
    return result.data;
  } catch (error) {
    return error;
  }
};


const addterms = async (term) => {
  try {
    const result = await Http.post(`${MainUrl}term/`, term);
    return result.data;
  } catch (error) {
    return error
  }
}

const deleteTerm = async (termId) => {
  try {
    const result = await Http.delete(`${MainUrl}term/${termId}`);
    console.log(result);
    return result.data;
  } catch (error) {
    return error
  }
}

const editTerm = async (termId, objterm) => {
  try {
    const result = await Http.put(`${MainUrl}term/${termId}`, objterm);
    console.log(result);
    return result.data;
  } catch (error) {
    return error
  }
}

const paginateTerm = async (pageNum, pageSize) => {
  try {
    const result = await Http.get(`${MainUrl}term/list?pagenumber=${pageNum}&pagesize=${pageSize}`);
    //console.log(result);
    return result.data
  } catch (error) {
    return error
  }
}

export { Terms, TermById, addterms, deleteTerm, editTerm, paginateTerm };

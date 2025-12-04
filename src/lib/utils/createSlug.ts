export const createSlug = (title: string, id?: string) => {
    if(id){
        return `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}-${id}`;
    }else{
        return `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`;
    }
}
export default function getNewId () {
    let id = localStorage.getItem('db_id');
    if (null === id) {
        localStorage.setItem('db_id', 1);
        return 1;
    }
    id = parseInt(id);
    id++;
    localStorage.setItem('db_id', id);
    return id;
}
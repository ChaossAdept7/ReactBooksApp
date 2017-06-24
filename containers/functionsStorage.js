/**
 * Created by serj on 6/24/17.
 */
/* you should bind it to class before using */
export function gotoPage(redirrect='/book_info',name='setCurrentId',id){
    this.props[name](id);
    this.props.history.push(redirrect);
}
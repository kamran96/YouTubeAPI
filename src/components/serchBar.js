import React,{Component} from 'react';
import styled from 'styled-components';



class Search extends React.Component{
    constructor(props){
        super(props);
        this.state= {term: ''}
    }


    render(){
        return(
            <div>
                <input className={this.props.className} type="search"
                onChange={event=> this.handleInputChange(event.target.value)}
                placeholder="Search for videos"/>
            </div>
        )
    }
    handleInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}

export default Search;

import React, { Component } from 'react';
import Entr from '../containers/JournalList';
import DeleteJournals from '../containers/DeleteJournals';
import { Container, Content } from 'native-base';


class AllJournals extends Component {
    componentDidMount() {
        this._initial();
    }

    _initial() {
        this.props.fetchAllJournals();
    }

    render() {
        const { journals } = this.props || state;

        return (
            <Container>
                <Content>
                    <JournalList journals={journals || [{}]} />
                    <DeleteJournals />
                </Content>
            </Container>
        );
    }
}

export default AllJournals;

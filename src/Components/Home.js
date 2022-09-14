import React, {Component} from 'react';
import {Card, Grid, Icon, Label} from "semantic-ui-react";
import ImageMarker from "react-image-marker";
import IMG from "../Assets/prescription.png";

class Home extends Component {

    state = {
        markers: [],
        code: [],
        count: 0
    };


    handleClick = (index) => {
       this.setState( {
           markers : this.state.markers.splice(index,1)
       })



    };

    render() {

        const CustomMarker = (props) => {
            return (
                <div>
                    <Label color='yellow' pointing='below' >Drug {props.itemNumber + 1}</Label>
                </div>
            );
        };

        const extra = (
            <div> {this.state.markers.map((a, i) => (
                    <Label as='a' key= {i} onClick={ () => this.handleClick(i) } >
                        Drug {i + 1}
                        <Icon name='delete'/>
                    </Label>
                )
            )}</div>
        );

        return (
            <Grid divided='horizontally'>
                <Grid.Row columns={1}>
                    <Grid.Column centered width={16}>
                        <Card centered
                              image={() => (<ImageMarker
                                  src={IMG}
                                  markers={this.state.markers}
                                  onAddMarker={(marker) => {
                                      this.setState(prevState => ({
                                          markers: [...prevState.markers, marker],
                                          count: this.state.count + 1,
                                          code: [...prevState.code, "DR" + this.state.count]
                                      }));
                                  }
                                  }

                                  markerComponent={CustomMarker}
                              />)}

                              extra={extra}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;

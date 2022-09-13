import React, {Component} from 'react';
import {Card, Grid, Icon, Label} from "semantic-ui-react";
import ImageMarker from "react-image-marker";
import IMG from "../Assets/prescription.png";

class Home extends Component {

    state ={
        markers : [],
        code : [],
        count : 0
    };


    render() {

        const extra = (
            <div> {this.state.markers.map((a, i) => (
                <Label as='a'>
                    Tag
                    <Icon name='delete' />
                </Label>
            )
        )}</div>
        );

        const CustomMarker = () => {

            let code = this.state.code[this.state.count-1];

            return (
                <div>
                    <Label color='yellow' pointing='below'>{code}</Label>
                </div>
            );
        };

        return (
            <Grid  divided='horizontally'>
                <Grid.Row columns={1}>
                    <Grid.Column centered width={16}>
                        <Card centered
                              image={() => ( <ImageMarker
                                  src={IMG}
                                  markers={this.state.markers}
                                  onAddMarker={(marker) =>{

                                      this.setState(prevState => ({markers :  [...prevState.markers, marker]}));
                                      this.setState({count : this.state.count+1});
                                      this.setState(prev => ({
                                          code : [...prev.code,"DR"+this.state.count]
                                      }));

                                      // setCode(...code,"DR");
                                     }
                                  }
                                  markerComponent={CustomMarker}
                              />)}
                            // header='Elliot Baker'
                            // meta='Friend'
                            // description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                              extra={extra}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;

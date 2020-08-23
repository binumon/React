import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";

export default class Test1 extends Component {


  constructor(props) {
    super(props);
    this.state = {
      DataSet: [],
      DataSet2: [],
      show: false,
      message: "",
      errormsg: "",
      success: false,
      error: false
    };
  }

  componentDidMount() {
    this.GetServices()
    
  }


  GetServices()
  {
    fetch("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services", {
  "method": "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(response => {
  this.setState({
    DataSet: response.data
    
  })
})
.catch(err => { console.log(err); 
});
}

handleClick = docTitle => {
  this.GetProvider();
};
GetProvider()
{
  fetch("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10", {
"method": "GET",
headers: {
  "Content-Type": "application/json"
}
})
.then(response => response.json())
.then(response => {
this.setState({
  DataSet2: response.data
  
})
})
.catch(err => { console.log(err); 
});
}

    render() {
        return (
          <Container>
          <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>List-1</Header>
              <List>
                {this.state.DataSet.map(el => {
                  return (
                    <List.Item   onClick={() => this.handleClick(el.id)}>
                      <List.Content>
                        {el.id} 
                      </List.Content>
                      <List.Content>
                         {el.Type}
                      </List.Content>
                      
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
        
          <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>List -2</Header>
              <List>
                {this.state.DataSet2.map(el => {
                  return (
                    <List.Item  >
                      <List.Content>
                        {el.id} 
                      </List.Content>
                      <List.Content>
                         {el.Type}
                      </List.Content>
                      
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
        </Container>
       )
    }
     
}
//export default Test1;

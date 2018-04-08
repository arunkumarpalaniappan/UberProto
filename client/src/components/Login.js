import React, {Component} from 'react'
import { Grid, Input, CheckBox, Form } from 'semantic-ui-react'

class Login extends Component {
    render() {
        return (
            <div className={"login"}>
                <Grid>  
                    <Grid.Column width={16}>
                    <Form>
                            <Form.Group widths="equal">
                                <Form.Input fluid label='User name' placeholder='User name' />
                            </Form.Group>
                            <Form.Group widths="equal">
                            <Form.Input fluid label='Password' placeholder='Password' />
                            </Form.Group>
                            <Form.Button>
                                    Submit
                                </Form.Button>
                        </Form>
                        </Grid.Column>
                    </Grid>
            </div>
        )
    }
}

export default Login
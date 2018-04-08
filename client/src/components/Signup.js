import React, {Component} from 'react'
import { Grid, Input, CheckBox, Form } from 'semantic-ui-react'

class SignUp extends Component {
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
                            <Form.Group widths="equal">
                                    <Form.Dropdown>
                                            <Form.Options>
                                                        Driver
                                                </Form.Options>
                                                <Form.Options>
                                                        User
                                                </Form.Options>
                                        </Form.Dropdown>
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

export default SignUp
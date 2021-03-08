import * as React from 'react';
import {MemberEntity} from '../../model';
import { memberAPI } from '../../api/member';
export class MembersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      members:[]
    }
  }
  public componentDidMount() {
    memberAPI
      .fetchMember()
      .then((members) => {
        this.setState({
          members
        })
      })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

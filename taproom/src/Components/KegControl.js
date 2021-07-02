import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import EditKeg from './EditKeg';


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formOnPage: !prevState.formOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleDecrement = ({ quantity }) => {
    const newQuantity = this.state.quantity - 1
    if ({ quantity } > 0) {
      this.setState({ quantity: newQuantity })
    } else {
      return null;
    }
  };

  // handleDecrementClick = (event) => {
  //   this.setState({quantity: event.target.value});
  // }
  // DecreaseItem = () => {
  //   this.setState(prevState => {
  //     if(prevState.quantity > 0) {
  //       return {
  //         quantity: prevState.quantity - 1
  //       }
  //     } else {
  //       return null;
  //     }
  //   });
  // }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    })
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKeg
        keg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Kegs";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails
        keg={this.state.selectedKeg}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick}
        onClickingDecrement={this.handleDecrement} />;
      buttonText = "Return to Kegs";
    } else if (this.state.formOnPage) {
      currentlyVisibleState = <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Kegs"
    } else {
      currentlyVisibleState = <KegList
        kegList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
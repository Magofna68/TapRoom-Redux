import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';
import EditKeg from './EditKeg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOnPage: false,
      selectedKeg: null,
      editing: false,
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
    const { dispatch } = this.props;
    const { name, brand, content, price, quantity, id } = newKeg;
    const action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      content: content,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: c.DELETE_KEG,
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  handleDecrementClick = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    if (selectedKeg.quantity > 1) {
      selectedKeg.quantity -= 1
      this.setState({ selectedKeg: selectedKeg });
    } else {
      selectedKeg.quantity = 1
      selectedKeg.quantity = "None: this keg is empty"
      this.setState({ selectedKeg: selectedKeg });
    }
  };

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, content, price, quantity, id } = kegToEdit;
    const action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      content: content,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
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
        onClickDecrement={this.handleDecrementClick}
      />;
      buttonText = "Return to Kegs";
    } else if (this.state.formOnPage) {
      currentlyVisibleState = <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Kegs"
    } else {
      currentlyVisibleState = <KegList
        kegList={this.props.masterKegList}
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

KegControl.PropTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UsersEditItemList from './UsersEditItemList'
import ContentPane from '../../components/ContentPane'
import EmptyMessage from '../../components/EmptyMessage'
import Loading from '../../components/Loading'

export default class DevicesEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemListEdit: [...this.props.selectedItemList],
            isLoading: false
        }
    }

    updateItemList = (index, name) => {
        let newItem = [...this.state.itemListEdit]

        //Find index of specific object using findIndex method.    
        let objIndex = newItem.findIndex((obj => obj["User.id"] === index))

        //Update object's name property.
        newItem[objIndex]["User.name"] = name

        this.setState({
            itemListEdit: [...newItem]
        })
    }

    handleSaveDevices = async () => {
        let itemListToSave = this.state.itemListEdit.map((item) => {
            return {
                id: item["User.id"],
                name: item["User.name"]
            }
        })

        this.setState({
            isLoading: true
        })

        if (itemListToSave.length > 0) {
            try {
                await this.props.glpi.updateItem({ itemtype: "User", input: itemListToSave })
                this.setState({isLoading: false})
                this.props.changeAction(null)
                this.props.changeSelectionMode(false)
                this.props.onNavigate([this.props.location[0]])
                this.props.showNotification('Success', 'changes saved successfully')
            } catch (error) {
                if (error.length > 1) {
                    this.props.showNotification(error[0], error[1])
                }
                this.setState({isLoading: false})
                this.props.changeAction(null)
                this.props.changeSelectionMode(false)
                this.props.onNavigate([this.props.location[0]])
            }
        }
    }

    render() {
        if (this.props.selectedItemList) {

            let renderComponent
            if (this.state.isLoading) {
                renderComponent = <Loading message="Loading..." />
            } else {
                renderComponent = this.props.selectedItemList.map((item) => {                                
                    return (
                        <UsersEditItemList
                            key={item["User.id"]}
                            itemListPaneWidth={this.props.itemListPaneWidth}
                            updateItemList={this.updateItemList}
                            location={this.props.location}
                            currentItem={item}
                            changeAction={this.props.changeAction} 
                        />
                    )
                })
            }              

            return (
                <ContentPane itemListPaneWidth={this.props.itemListPaneWidth}>
                    <div className="contentHeader">
                        <h2 className="win-h2 titleContentPane" > Edit {this.props.location[0]} </h2>
                        <button className="win-button win-button-primary" onClick={this.handleSaveDevices}>
                            Save
                        </button>
                    </div>
                    <div className="separator" />
                    {renderComponent}
                </ContentPane>
            )

        } else {
            return (
                <EmptyMessage message="No Selection" itemListPaneWidth={this.props.itemListPaneWidth} />
            )
        }
    }
}
DevicesEdit.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    selectedItemList: PropTypes.array,
    location: PropTypes.array.isRequired,
    onNavigate: PropTypes.func.isRequired,
    selectedIndex: PropTypes.array,
    changeSelectionMode: PropTypes.func.isRequired,
    action: PropTypes.string,
    changeAction: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
    glpi: PropTypes.object.isRequired
}
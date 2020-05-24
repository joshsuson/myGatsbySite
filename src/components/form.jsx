import React from "react"
import { TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
	customForm: {
		textAlign: "center",
		width: "50%",
		margin: "0 auto"
	},
	nameField: {
		width: "45%"
	},
	customInput: {
		marginBottom: "16px"
	},
	lastNameInput: {
		marginLeft: "8px"
	},
	customFullWidth: {
		width: "92%"
	}
}))

export default function FooterForm() {
	const classes = useStyles()
	const firstName = clsx(classes.customInput, classes.nameField)
	const lastName = clsx(
		classes.customInput,
		classes.nameField,
		classes.lastNameInput
	)
	const email = clsx(classes.customInput, classes.customFullWidth)
	const message = clsx(classes.customInput, classes.customFullWidth)
	return (
		<form className={classes.customForm}>
			<TextField
				id="firstname"
				variant="outlined"
				label="First Name"
				className={firstName}
			/>
			<TextField
				id="lastname"
				variant="outlined"
				label="Last Name"
				className={lastName}
			/>
			<TextField
				id="email"
				variant="outlined"
				label="E-Mail"
				className={email}
			/>
			<TextField
				id="message"
				variant="outlined"
				label="Your Message"
				multiline
				rows={4}
				className={message}
			/>
		</form>
	)
}

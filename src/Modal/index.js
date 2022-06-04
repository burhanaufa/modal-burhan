import React from "react";
import styled from "styled-components";
import IconClose from "./iconClose";

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	z-index: 999;
	justify-content: center;
`;

ModalContainer.Modal = styled.div`
	position: absolute;
	top: max(12em);
	max-width: 30%;
	background: white;
	flex-direction: column;
	border-radius: 0.5em;
	overflow-y: hidden;
`;

ModalContainer.Header = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #979797;
	padding: 20px;
`;

ModalContainer.Icon = styled.span`
	cursor: pointer;
`;

ModalContainer.Title = styled.div`
	color: #323c47;
	font-size: 20px;
	font-weight: 600;
`;

ModalContainer.Content = styled.div`
	padding: 20px;
	max-height: 300px;
	overflow-y: auto;
`;

ModalContainer.Footer = styled.div`
	display: flex;
	justify-content: center;
	border-top: 1px solid #979797;
	padding: 20px;
`;

const Modal = ({ onClose, headerTemplate, bodyTemplate, footerTemplate }) => {
	return (
		<ModalContainer onClick={onClose}>
			<ModalContainer.Modal onClick={(e) => e.stopPropagation()}>
				<ModalContainer.Header>
					<ModalContainer.Title>{headerTemplate()}</ModalContainer.Title>
					<ModalContainer.Icon onClick={onClose}>
						<IconClose />
					</ModalContainer.Icon>
				</ModalContainer.Header>
				<ModalContainer.Content>{bodyTemplate()}</ModalContainer.Content>
				<ModalContainer.Footer>{footerTemplate()}</ModalContainer.Footer>
			</ModalContainer.Modal>
		</ModalContainer>
	);
};

export default Modal;

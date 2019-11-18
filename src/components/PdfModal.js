import React from 'react';
import { View, StyleSheet } from 'react-native';

import Modal from './MyModal';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function DownloadPdf(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export class PdfModal extends React.Component {
    calcWidth() {
        return Math.max(window.innerWidth * 0.4, 400);
    }

    render() {
        return (
            <Modal
                title="PDF Preview"
                show={this.props.isOpen}
                onHide={this.props.onHide}
            >
                <Document
                    file={this.props.pdf}
                >
                    <View style={styles.pdf}>
                        {this.props.pages.map((val,id) => {
                            return <Page key={id} pageNumber={parseInt(val)} width={this.calcWidth()}/>;
                        })}
                    </View>
                </Document>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    pdf: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
});
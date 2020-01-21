import React from 'react';
import { View, StyleSheet } from 'react-native';

import Modal from './MyModal';

import { Document, Page } from 'react-pdf';
import { MobileWidth } from '..';

export function DownloadPdf(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export class PdfModal extends React.Component {
    calcWidth(pages) {
         var baseWidth = window.innerWidth < MobileWidth ? window.innerWidth*0.85 : window.innerWidth*0.8/pages;
         return Math.min(baseWidth, 800);
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
                            return (
                                <Page
                                    key={id}
                                    pageNumber={parseInt(val)}
                                    width={this.calcWidth(this.props.pages.length)}
                                    onLoadSuccess={this.props.onPdfLoaded}
                                />);
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
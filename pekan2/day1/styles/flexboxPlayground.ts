import { StyleSheet } from 'react-native';

export const flexboxPlaygroundStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        color: '#333',
    },
    controlsContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    controlGroup: {
        marginBottom: 20,
    },
    controlTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        color: '#444',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeButton: {
        backgroundColor: '#007AFF',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    activeButtonText: {
        color: '#fff',
    },
    flexboxArea: {
        flex: 2,
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    flexContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 8,
    },
    box: {
        width: 80,
        height: 80,
        borderRadius: 8,
        margin: 4,
    },
    redBox: {
        backgroundColor: '#FF3B30',
    },
    blueBox: {
        backgroundColor: '#007AFF',
    },
    greenBox: {
        backgroundColor: '#4CD964',
    },
});

// Export tipe untuk TypeScript (opsional)
export type FlexboxPlaygroundStyles = typeof flexboxPlaygroundStyles;
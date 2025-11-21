import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { openImagePicker, getStoredProductAssets, ImageAsset } from '../utils/imagePicker';

const AddProductScreen: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedImages, setSelectedImages] = useState<ImageAsset[]>([]);

  const handleSelectImages = async () => {
    try {
      const images = await openImagePicker();
      setSelectedImages(images);
      
      if (images.length > 0) {
        Alert.alert('Success', `${images.length} foto berhasil dipilih!`);
      }
    } catch (error) {
      Alert.alert('Error', 'Gagal memilih gambar');
    }
  };

  const handleSubmit = () => {
    if (!productName || !productPrice || selectedImages.length === 0) {
      Alert.alert('Error', 'Harap isi semua field dan pilih minimal 1 foto');
      return;
    }

    Alert.alert(
      'Success', 
      `Produk "${productName}" berhasil dibuat dengan ${selectedImages.length} foto`
    );

    // Reset form
    setProductName('');
    setProductPrice('');
    setSelectedImages([]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tambah Produk Baru</Text>

      {/* Form Input */}
      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Nama Produk"
          value={productName}
          onChangeText={setProductName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Harga Produk"
          value={productPrice}
          onChangeText={setProductPrice}
          keyboardType="numeric"
        />
      </View>

      {/* Upload Foto Section */}
      <View style={styles.uploadSection}>
        <Text style={styles.sectionTitle}>Upload Foto Produk (Maks 5)</Text>
        
        <TouchableOpacity style={styles.uploadButton} onPress={handleSelectImages}>
          <Text style={styles.uploadButtonText}>Pilih Foto</Text>
        </TouchableOpacity>

        {/* Preview Images */}
        <View style={styles.imagePreview}>
          {selectedImages.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: image.uri }} style={styles.image} />
              <Text style={styles.fileName}>{image.fileName}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Tambah Produk</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  formSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  uploadSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  uploadButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  imagePreview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  fileName: {
    fontSize: 10,
    marginTop: 4,
    color: '#666',
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddProductScreen;
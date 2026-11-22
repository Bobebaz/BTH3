import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from '../products/products.services';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // GET /products: Lấy danh sách tất cả các sản phẩm
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // GET /products/:id: Lấy thông tin chi tiết một sản phẩm
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // POST /products: Thêm một sản phẩm mới
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // PUT /products/:id: Cập nhật thông tin sản phẩm
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  // DELETE /products/:id: Xóa một sản phẩm
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}